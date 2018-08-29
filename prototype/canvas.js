// import Canvas = from 'canvas'

export default class Canvas {
    constructor() {
    	this.color = 'red'
    }
    getCanvas(params={}) {
            let { shape, width, height, bgColor } = params;
            // var canvas = new Canvas(width, width);
            // var ctx = canvas.getContext('2d');
            // if (shape == 'circle') {
            //     //圆形
            //     ctx.beginPath();
            //     ctx.fillStyle = bgColor;
            //     ctx.arc(width / 2, width / 2, width / 2, 0, 2 * Math.PI, true);
            //     ctx.fill();

            // } else {
            //     //矩形
            //     ctx.fillStyle = bgColor;
            //     ctx.fillRect(0, 0, width, height);
            // }
            // return canvas.toBuffer();
            let flag = shape === 'circle' ? '50%' : '0'
            return `<div style='width:${width}px;height:${height}px;background:${bgColor};border-radius:${flag}' />`
    }
}