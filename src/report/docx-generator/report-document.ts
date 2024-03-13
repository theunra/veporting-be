import { Document, Packer } from 'docx';
import * as paragraphStyles from './paragraph-styles';
import {
    CoverSection,
    DaftarIsiSection,
    DaftarTabelSection,
    DaftarGambarSection,
    ConfidentialityStatementSection,
    ExecutiveSummarySection,
    ScopeApplicationSection,
    MethodologySection,
    SummaryOfFindingsSection
} from './sections';
import { DocumentData } from './data';
import { Point0Numbering } from './numbering';

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
            MethodologySection(data),
            SummaryOfFindingsSection(data),
        ],
        numbering : {
            config : [
                Point0Numbering
            ],
        },
    });
}