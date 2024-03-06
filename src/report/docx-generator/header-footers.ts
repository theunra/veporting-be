import { Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, Header, Footer, PageNumber} from "docx";
import { generateNewParagraphs } from "./utils";
import { HeaderLogoImage, HeaderBatasImage } from "./images";

/**
 * ******************************************************************************************************************
 * Header & Footer
 * ******************************************************************************************************************
 */

export function DefaultHeader(){
    return {
        default : new Header({
            children : [
                ...generateNewParagraphs(2),
                new Table({
                    alignment : AlignmentType.END,
                    borders : {
                        top : {style: 'none'},
                        bottom : {style: 'none'},
                        left : {style: 'none'},
                        right : {style: 'none'},
                        insideHorizontal : {style: 'none'},
                        insideVertical : {style: 'none'},
                    },
                    rows : [
                        new TableRow({
                            children : [
                                new TableCell({
                                    children : [
                                        new Paragraph({
                                            children : [
                                                HeaderLogoImage(), 
                                                new TextRun("  "),
                                                HeaderBatasImage(), 
                                                new TextRun("  ")
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    children : [
                                        new Paragraph({
                                            children : [
                                                new TextRun({
                                                text : "WIDYA SECURITY",
                                                size : 6 * 2,
                                                bold : true,
                                                font : "Cambria",
                                            })],
                                            spacing : {
                                                after : 100,
                                            }
                                        }),
                                        new Paragraph({
                                            children : [
                                                new TextRun({
                                                text : "Cyber Security Solutions",
                                                size : 5 * 2,
                                                font : "Cambria",
                                            })],
                                        }),
                                        new Paragraph({
                                            children : [
                                                new TextRun({text : "Feel ", font : "Cambria", size : 5 * 2,}),
                                                new TextRun({text : "SAFE ", bold : true, font : "Cambria", size : 5 * 2,}),
                                                new TextRun({text : "with Us! ", font : "Cambria", size : 5 * 2,}),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],                        
                }),
            ],
        }),
    };
}

export function DefaultFooter(){
    return {
        default : new Footer({
            children : [
                new Paragraph({
                    children : [new TextRun({children : [PageNumber.CURRENT]})],
                    alignment : AlignmentType.CENTER,
                }),
            ],
        }),
    };
}