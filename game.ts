function bob(a: number) : number {
    return 1;
}
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(10, 20, 150, 100);
ctx.fill();

document.addEventListener('keydown', (event)=> {
    switch (event.key) {
        case 'ArrowLeft':
            console.log("left");
            break;
        case 'ArrowUp':
            console.log("up");
            break;
        case 'ArrowRight':
            console.log("right");
            break;
        case 'ArrowDown':
            console.log("down");
            break;
        default:
            // Gestion des autres touches, si nécessaire
            break;
    }
});