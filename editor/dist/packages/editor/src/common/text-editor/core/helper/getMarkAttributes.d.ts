import { EditorState } from 'prosemirror-state';
import { MarkType } from 'prosemirror-model';
export declare function getMarkAttributes(state: EditorState, typeOrName: string | MarkType): Record<string, unknown>;
