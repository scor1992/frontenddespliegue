export class Empleado {
    constructor (_id="", name="", lastname="", ndocument=0, biometric=""){

        this._id=_id;
        this.name=name;
        this.lastname=lastname;
        this.ndocument=ndocument;
        this.biometric=biometric;
    }
    _id:string;
    name:string;
    lastname:string;
    ndocument:number;
    biometric:string;

}
