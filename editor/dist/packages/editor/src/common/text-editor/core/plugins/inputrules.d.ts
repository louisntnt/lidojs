import { NodeType, Schema } from 'prosemirror-model';
export declare function blockQuoteRule(nodeType: NodeType): import("prosemirror-inputrules").InputRule;
export declare function orderedListRule(nodeType: NodeType): import("prosemirror-inputrules").InputRule;
export declare function bulletListRule(nodeType: NodeType): import("prosemirror-inputrules").InputRule;
export declare function codeBlockRule(nodeType: NodeType): import("prosemirror-inputrules").InputRule;
export declare function headingRule(nodeType: NodeType, maxLevel: number): import("prosemirror-inputrules").InputRule;
export declare function buildInputRules(schema: Schema): import("prosemirror-state").Plugin<{
    transform: import("prosemirror-state").Transaction;
    from: number;
    to: number;
    text: string;
} | null>;
