const colors = ['red', '#fc0', '#0cf', 'magenta', 'pink', 'yellow'];

const { random } = Math;

const rand = arr => arr[random() * (arr.length - 1) | 0];

registerPaint('example', class {
    paint(ctx, { width, height }) {
        // half height
        const hh = height / 2;
        // half width
        const hw = width / 2;

        ctx.fillStyle = rand(colors);
        ctx.fillRect(0, 0, hw, hh);

        ctx.fillStyle = rand(colors);
        ctx.fillRect(hw, 0, hw, hh);


        ctx.fillStyle = rand(colors);
        ctx.fillRect(0, hh, hw, hh);

        ctx.fillStyle = rand(colors);
        ctx.fillRect(hw, hh, hw, hh);
    }
});
