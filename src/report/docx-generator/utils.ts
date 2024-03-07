import { Paragraph } from 'docx';
/**
 * ******************************************************************************************************************
 * Utils
 * ******************************************************************************************************************
 */

/**
 *
 * @param {int} n , number of paragraph to generate
 * @returns {Paragraph[]}
 */
export function generateNewParagraphs(n: number) {
  const pgs: Paragraph[] = [];
  for (let i = 0; i < n; i++) {
    pgs.push(new Paragraph({}));
  }
  return pgs;
}
