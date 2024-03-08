import { Document, Packer } from 'docx';
import * as paragraphStyles from './paragraph-styles';
import {
    CoverSection,
    DaftarIsiSection,
    DaftarTabelSection,
    DaftarGambarSection,
    ConfidentialityStatementSection,
    ExecutiveSummarySection,
    ScopeApplicationSection
} from './sections';
import { DocumentData } from './data';
import { MyNumbering } from './numbering';

export function createDocument(data : DocumentData) : Document{
    return new Document({
        styles : {
            paragraphStyles : Object.values(paragraphStyles).map((val) => val),
        },
        sections : [
            CoverSection(data),
            DaftarIsiSection(),
            DaftarTabelSection(),
            DaftarGambarSection(),
            ConfidentialityStatementSection(data),
            ExecutiveSummarySection(data),
            ScopeApplicationSection(data),
        ],
        numbering : {
            config : [
                MyNumbering
            ],
        },
    });
}