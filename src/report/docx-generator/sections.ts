import { Paragraph, TextRun, AlignmentType, HeadingLevel, ISectionOptions,  } from "docx";
import { DefaultHeader, DefaultFooter } from "./header-footers";
import { generateNewParagraphs } from "./utils";
import { CoverBGImage } from "./images";
import { RevisionHistoryTable, AuthorDocumentTable, ContactInformationTable, RevisionHistoryTableContent, AuthorDocumentTableContent, ContactInformationTableContent } from "./tables";
import { DocumentData } from "./data";
const IDKWHATCONSTANT = 555.555556;
/*
 * ******************************************************************************************************************
 * Pages & Sections
 * ******************************************************************************************************************
 */

export function BasePageProperties(){
    return {
        page : {
            margin : {
                /*
                100 = 0.18 cm
                555.555556 = 1 cm
                */
                top : 2.54 * IDKWHATCONSTANT,
                left : 2.54 * IDKWHATCONSTANT,
                right : 2.54 * IDKWHATCONSTANT,
                bottom : 2.54 * IDKWHATCONSTANT,
            }
        }
    };
}

export function DefaultSection(){
    return {
        headers : DefaultHeader(),
        footers : DefaultFooter(),
        properties : BasePageProperties(),
    };
}

/**
 * Cover page
 * @returns {ISectionOptions}
 */
export function CoverSection(doc : DocumentData) : ISectionOptions {
    return {
        properties : BasePageProperties(),
        children : [            
            new Paragraph({
                text : doc.report_date,
                style : "coverDate",
                alignment : AlignmentType.END,
                children : [CoverBGImage(),]
            }),
            ...generateNewParagraphs(17),
            new Paragraph({
                text : "PENETRATION TESTING",
                style : "coverReportType",
                alignment : AlignmentType.CENTER,
            }),
            new Paragraph({
                text : "REPORT",
                style : "coverReportType",
                alignment : AlignmentType.CENTER,
            }),
            ...generateNewParagraphs(2),
            new Paragraph({
                text : "CLIENT",
                style : "coverReportInfo",
                alignment : AlignmentType.CENTER,
            }),
            new Paragraph({
                text : doc.client_name,
                style : "coverReportInfo",
                alignment : AlignmentType.CENTER,
            }),
            ...generateNewParagraphs(12),
            new Paragraph({
                children : [new TextRun({
                    text : "WIDYA SECURITY",
                    size : 12 * 2,
                    font : "Cambria",
                })],
                alignment : AlignmentType.END,
            }),
            new Paragraph({
                children : [new TextRun({
                    text : "Jl. Anggajaya 2 No.105, Sanggrahan, Condongcatur, Kec. Depok, Kab. Sleman, Daerah Istimewa Yogyakarta 55281",
                    size : 8 * 2,
                    font : "Tahoma",
                })],
                alignment : AlignmentType.END,
            }),
        ],
    };
}

export function DaftarIsiSection() : ISectionOptions {
    return {
        ...DefaultSection(),
        children : [
            new Paragraph({
                text : "DAFTAR ISI",
                alignment : AlignmentType.CENTER,
                heading : HeadingLevel.HEADING_1, 
            })
        ],
    };
}

export function DaftarTabelSection() : ISectionOptions {
    return {
        ...DefaultSection(),
        children : [
            new Paragraph({
                text : "DAFTAR TABEL",
                alignment : AlignmentType.CENTER,
                heading : HeadingLevel.HEADING_1, 
            })
        ],
    };
}

export function DaftarGambarSection() : ISectionOptions {
    return {
        ...DefaultSection(),
        children : [
            new Paragraph({
                text : "DAFTAR GAMBAR",
                alignment : AlignmentType.CENTER,
                heading : HeadingLevel.HEADING_1, 
            })
        ],
    };
}

export function ConfidentialityStatementSection(doc : DocumentData) : ISectionOptions {
    //DUMMY
    const revcontents : RevisionHistoryTableContent[] = [
        {
            version : '0.1',
            date : '08 Januari 2024',
            description : 'Initial Test',
        },
        {
            version : '0.2',
            date : '',
            description : 'Re-Test',
        },
    ];

    //DUMMY
    const authorcontents : AuthorDocumentTableContent[] = [
        {
            name : 'Rizky Eka Maulana',
            assignment : 'Lead Pentest',
            sign : '',
            date : '17 Januari 2024'
        },
        {
            name : 'Zukhrufan Ramadhan',
            assignment : 'Pentester',
            sign : '',
            date : '17 Januari 2024'
        },
    ];

    //DUMMY
    const contactcontents : ContactInformationTableContent[] = [
        {
            company : 'Widya Security',
            name : 'Hapsari SHP',
            email : 'sari@gmail.com',
        },
    ];

    return {
        ...DefaultSection(),
        children : [
            new Paragraph({
                text : "Confidentiality Statement",
                alignment : AlignmentType.START,
                heading : HeadingLevel.HEADING_1, 
            }),
            new Paragraph({
                text : `    Dokumen ini adalah milik eksklusif ${doc.client_name} dan PT Widya Adijaya Nusantara (Widya Security). Dokumen ini berisi informasi hak milik dan rahasia (Confidential). Penggandaan, pendistribusian ulang, atau penggunaan, seluruhnya atau sebagian, dalam bentuk apapun, memerlukan persetujuan ${doc.client_name} dan PT Widya Adijaya Nusantara (Widya Security).`,
                alignment : AlignmentType.JUSTIFIED,
                style : "normalIndented"
            }),
            new Paragraph({
                text : "Revision History",
                alignment : AlignmentType.START,
                style : "tableHeading"
            }),
            RevisionHistoryTable(revcontents),
            new Paragraph({
                text : "Author Document",
                alignment : AlignmentType.START,
                style : "tableHeading"
            }),
            AuthorDocumentTable(authorcontents),
            new Paragraph({
                text : "Contact Information",
                alignment : AlignmentType.START,
                style : "tableHeading"
            }),
            ContactInformationTable(contactcontents),
        ],
    }
}


export function ExecutiveSummarySection(doc: DocumentData) : ISectionOptions {
    return {
        ...DefaultSection(),
        children : [
            new Paragraph({
                text : "Executive Summary",
                alignment : AlignmentType.START,
                heading : HeadingLevel.HEADING_1, 
            }),
        ],
    };
}