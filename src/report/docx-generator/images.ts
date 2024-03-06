import { ImageRun } from "docx";
import * as fs from 'fs';

const WHATEVERTHEFUCKTOCENTIMETERConstant = 37.735849056603773584905660377358;
/**
 * ******************************************************************************************************************
 * Images
 * ******************************************************************************************************************
 */

export function CoverBGImage(){
    return new ImageRun({
        data : fs.readFileSync("./bgCover.png"),
        transformation : {
            /* 
            100 = 2.65 cm 
            100/2.65 = 1 cm
            37.7358 = 1 cm
            */
            width : 21.17 * WHATEVERTHEFUCKTOCENTIMETERConstant,
            height : 29.63 * WHATEVERTHEFUCKTOCENTIMETERConstant,
        },
        floating : {
            horizontalPosition : {
                align : 'left',
            },
            verticalPosition : {
                align : 'top',
            },
            behindDocument : true,
        },
    });
}

export function HeaderLogoImage(){
    return new ImageRun({
        data : fs.readFileSync("./logoWidSecHeader.png"),
        transformation : {
            width : 0.79 * WHATEVERTHEFUCKTOCENTIMETERConstant,
            height : 1.06 * WHATEVERTHEFUCKTOCENTIMETERConstant,
        },
    });
}

export function HeaderBatasImage(){
    return new ImageRun({
        data : fs.readFileSync("./batasHeader.png"),
        transformation : {
            width : 0.05 * WHATEVERTHEFUCKTOCENTIMETERConstant,
            height : 1.06 * WHATEVERTHEFUCKTOCENTIMETERConstant,
        },
    });
}