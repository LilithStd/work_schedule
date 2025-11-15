import { useFloating, offset, flip, shift } from '@floating-ui/react';

export default function Example() {
    const { refs, floatingStyles } = useFloating({
        placement: 'bottom-start',
        middleware: [
            offset(8),
            flip(),
            shift({ padding: 8 }),
        ],
    });

    return (
        <>
            <button ref={refs.setReference}>Open</button>

            <div
                ref={refs.setFloating}
                style={floatingStyles}
            >
                Tooltip content
            </div>
        </>
    );
}
