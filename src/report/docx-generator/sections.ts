import { Paragraph, TextRun, AlignmentType, HeadingLevel, ISectionOptions,  } from "docx";
import { DefaultHeader, DefaultFooter } from "./header-footers";
import { generateNewParagraphs } from "./utils";
import { CoverBGImage } from "./images";
import { RevisionHistoryTable, AuthorDocumentTable, ContactInformationTable, RevisionHistoryTableContent, AuthorDocumentTableContent, ContactInformationTableContent, ExecutiveSummaryTable, ExecutiveSummaryTableContent, ScopeApplicationTable, ScopeApplicationTableContent } from "./tables";
import { DocumentData } from "./data";
import { MyNumbering } from "./numbering";
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
                text : `Dokumen ini adalah milik eksklusif ${doc.client_name} dan PT Widya Adijaya Nusantara (Widya Security). Dokumen ini berisi informasi hak milik dan rahasia (Confidential). Penggandaan, pendistribusian ulang, atau penggunaan, seluruhnya atau sebagian, dalam bentuk apapun, memerlukan persetujuan ${doc.client_name} dan PT Widya Adijaya Nusantara (Widya Security).`,
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
    const content : ExecutiveSummaryTableContent = {
        critical : 0,
        high : 2,
        low : 1,
        medium : 0,
    };
    return {
        ...DefaultSection(),
        children : [
            new Paragraph({
                text : "Executive Summary",
                alignment : AlignmentType.START,
                heading : HeadingLevel.HEADING_1, 
                numbering : {
                    level : 0,
                    reference : MyNumbering.reference,
                },
            }),
            new Paragraph({
                text : "PT Widya Adijaya Nusantara (Widya Security) melakukan kajian celah keamanan sebagai salah satu rangkaian kegiatan untuk menentukan dan mengetahui serangan-serangan yang bisa terjadi terhadap kerentanan yang ada pada sistem dan mengetahui dampak yang diakibatkan yang dilakukan oleh penyerang.",
                alignment : AlignmentType.JUSTIFIED,
                style : "normalIndented"
            }),
            ...generateNewParagraphs(1),
            new Paragraph({
                text : "Berdasarkan pengujian yang telah dilakukan dalam rentang waktu dan ruang lingkup yang telah ditentukan. Penguji menemukan bahwa ada 1 kerentanan keamanan di situs web yang perlu segera diperbaiki sesuai dengan peraturan dan kebijakan internal untuk mengurangi risiko eksploitasi yang dapat membahayakan kerahasiaan, integritas, dan ketersediaan. Berikut ini adalah daftar hasil yang diurutkan berdasarkan tingkat risiko kerentanan.",
                alignment : AlignmentType.JUSTIFIED,
                style : "normal"
            }),
            ExecutiveSummaryTable(content),
        ],
    };
}

export function ScopeApplicationSection(doc: DocumentData) : ISectionOptions {
    const content : ScopeApplicationTableContent = {
        client_name : doc.client_name,
        approach : doc.product_type,
        category : doc.target_type,
        urls : doc.target_address,
        credential_username : doc.credential_username,
        credential_password : doc.credential_password
    }
    return {
        ...DefaultSection(),
        children : [
            new Paragraph({
                text : "Scope Application",
                alignment : AlignmentType.START,
                heading : HeadingLevel.HEADING_1, 
                numbering : {
                    level : 0,
                    reference : MyNumbering.reference,
                },
            }),
            new Paragraph({
                text : `Sebelum pengujian, ${doc.client_name} memberi informasi kepada PT Widya Adijaya Nusantara (Widya Security) berupa URL aplikasi web yang digunakan untuk proses pengujian. Cakupan Penetration Testing terbatas pada URL tersebut dan layanan lain yang dijalankannya (yang berhubungan dengan layanan tersebut). Pengujian Penetration Testing dilakukan dengan menggunakan perspektif sebagai penyerang (attacker) yang tidak memiliki informasi sensitif mengenai sistem dan authentikasi pengguna (hak akses) ke sistem dari otoritas pengelola sistem (pendekatan pengujian Grey Box).`,
                alignment : AlignmentType.JUSTIFIED,
                style : "normalIndented"
            }),
            new Paragraph({
                text : `Rincian cakupan pengujian tersebut disajikan pada tabel berikut ini:`,
                alignment : AlignmentType.JUSTIFIED,
                style : "normalIndented"
            }),
            ScopeApplicationTable(content),
        ],
    };
}