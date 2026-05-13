import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';
import Tooltip from '../src/Tooltip.svelte';

vi.mock('@popperjs/core', () => ({
  createPopper: vi.fn(() => ({ destroy: vi.fn(), update: vi.fn() })),
}));

afterEach(() => {
  cleanup();
});

function makeTrigger() {
  const el = document.createElement('button');
  document.body.appendChild(el);
  return el;
}

describe('rendering', () => {
  it('does not render when open is false', () => {
    render(Tooltip, { open: false, triggerElement: makeTrigger() });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('renders when open is true', async () => {
    render(Tooltip, { open: true, triggerElement: makeTrigger() });
    await tick();
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('has tooltip CSS classes', async () => {
    render(Tooltip, {
      open: true,
      triggerElement: makeTrigger(),
      placement: 'top',
    });
    await tick();
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveClass('tooltip', 'bs-tooltip-top', 'fade', 'show');
  });

  it('applies the placement class from the placement prop', async () => {
    render(Tooltip, {
      open: true,
      triggerElement: makeTrigger(),
      placement: 'bottom',
    });
    await tick();
    expect(screen.getByRole('tooltip')).toHaveClass('bs-tooltip-bottom');
  });
});

describe('triggers', () => {
  it('opens on mouseenter', async () => {
    const el = makeTrigger();
    render(Tooltip, { open: false, triggerElement: el, trigger: 'hover' });
    await tick();
    await fireEvent.mouseEnter(el);
    await tick();
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('closes on mouseleave', async () => {
    const el = makeTrigger();
    render(Tooltip, { open: true, triggerElement: el, trigger: 'hover' });
    await tick();
    await fireEvent.mouseLeave(el);
    await tick();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('opens on focus', async () => {
    const el = makeTrigger();
    render(Tooltip, { open: false, triggerElement: el, trigger: 'focus' });
    await tick();
    await fireEvent.focus(el);
    await tick();
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('closes on blur', async () => {
    const el = makeTrigger();
    render(Tooltip, { open: true, triggerElement: el, trigger: 'focus' });
    await tick();
    await fireEvent.blur(el);
    await tick();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('toggles on click', async () => {
    const el = makeTrigger();
    render(Tooltip, { open: false, triggerElement: el, trigger: 'click' });
    await tick();
    await fireEvent.click(el);
    await tick();
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    await fireEvent.click(el);
    await tick();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('does not attach hover triggers when trigger is focus only', async () => {
    const el = makeTrigger();
    render(Tooltip, { open: false, triggerElement: el, trigger: 'focus' });
    await tick();
    await fireEvent.mouseEnter(el);
    await tick();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});

describe('callbacks', () => {
  it('calls onOpened when tooltip opens', async () => {
    const onOpened = vi.fn();
    render(Tooltip, { open: true, triggerElement: makeTrigger(), onOpened });
    await tick();
    await vi.waitFor(() => expect(onOpened).toHaveBeenCalledOnce());
  });

  it('calls onClosed when tooltip closes', async () => {
    const onClosed = vi.fn();
    const { rerender } = render(Tooltip, {
      open: true,
      triggerElement: makeTrigger(),
      onClosed,
    });
    await tick();
    await rerender({ open: false });
    await tick();
    expect(onClosed).toHaveBeenCalledOnce();
  });
});
