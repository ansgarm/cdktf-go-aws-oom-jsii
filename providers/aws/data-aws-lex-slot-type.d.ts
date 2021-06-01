import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLexSlotTypeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html#name DataAwsLexSlotType#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html#version DataAwsLexSlotType#version}.
     */
    readonly version?: string;
}
export declare class DataAwsLexSlotTypeEnumerationValue extends cdktf.ComplexComputedList {
    get synonyms(): string[];
    get value(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html aws_lex_slot_type}.
 */
export declare class DataAwsLexSlotType extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_slot_type.html aws_lex_slot_type} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLexSlotTypeConfig);
    get checksum(): string;
    get createdDate(): string;
    get description(): string;
    enumerationValue(index: string): DataAwsLexSlotTypeEnumerationValue;
    get id(): string;
    get lastUpdatedDate(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get valueSelectionStrategy(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
