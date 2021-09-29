import {Shape} from "./Shape";

export class Rectangle extends Shape implements IArea{

    private _width: number;
    private _height: number;


    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this._width = width;
        this._height = height;
    }

    area(): number {
        return this._width*this._height;
    }




// constructor(x: number, y: number) {
    //     super(x, y);
    // }
    //
    //
    //
    // area(): number {
    //     return this._x*this._y;
    // }

}