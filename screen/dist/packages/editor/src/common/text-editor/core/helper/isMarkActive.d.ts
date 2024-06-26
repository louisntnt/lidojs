import { EditorState } from 'prosemirror-state';
import { MarkType } from 'prosemirror-model';
export declare function isMarkActive(state: EditorState, typeOrName: MarkType | string | null, attributes?: Record<string, unknown>): boolean;
