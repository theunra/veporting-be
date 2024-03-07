import { ImageRun } from "docx";
import * as fs from 'fs';

const ImageSizeToCmConstant = 37.735849056603773584905660377358;
const FILEPATH = "src/report/docx-generator";
/**
 * ******************************************************************************************************************
 * Images
 * ******************************************************************************************************************
 */

export function CoverBGImage(){
    return new ImageRun({
        data : fs.readFileSync(`${FILEPATH}/bgCover.png`),
        transformation : {
            /* 
            100 = 2.65 cm 
            100/2.65 = 1 cm
            37.7358 = 1 cm
            */
            width : 21.17 * ImageSizeToCmConstant,
            height : 29.63 * ImageSizeToCmConstant,
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
        data : fs.readFileSync(`${FILEPATH}/logoWidSecHeader.png`),
        transformation : {
            width : 0.79 * ImageSizeToCmConstant,
            height : 1.06 * ImageSizeToCmConstant,
        },
    });
}

export function HeaderBatasImage(){
    return new ImageRun({
        data : fs.readFileSync(`${FILEPATH}/batasHeader.png`),
        transformation : {
            width : 0.05 * ImageSizeToCmConstant,
            height : 1.06 * ImageSizeToCmConstant,
        },
    });
}