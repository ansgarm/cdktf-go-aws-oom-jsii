import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LexSlotTypeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#create_version LexSlotType#create_version}.
     */
    readonly createVersion?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#description LexSlotType#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#name LexSlotType#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#value_selection_strategy LexSlotType#value_selection_strategy}.
     */
    readonly valueSelectionStrategy?: string;
    /**
     * enumeration_value block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#enumeration_value LexSlotType#enumeration_value}
     */
    readonly enumerationValue: LexSlotTypeEnumerationValue[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#timeouts LexSlotType#timeouts}
     */
    readonly timeouts?: LexSlotTypeTimeouts;
}
export interface LexSlotTypeEnumerationValue {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#synonyms LexSlotType#synonyms}.
     */
    readonly synonyms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#value LexSlotType#value}.
     */
    readonly value: string;
}
export interface LexSlotTypeTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#create LexSlotType#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#delete LexSlotType#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#update LexSlotType#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type}.
 */
export declare class LexSlotType extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LexSlotTypeConfig);
    get checksum(): string;
    private _createVersion?;
    get createVersion(): boolean;
    set createVersion(value: boolean);
    resetCreateVersion(): void;
    get createVersionInput(): boolean | undefined;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lastUpdatedDate(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _valueSelectionStrategy?;
    get valueSelectionStrategy(): string;
    set valueSelectionStrategy(value: string);
    resetValueSelectionStrategy(): void;
    get valueSelectionStrategyInput(): string | undefined;
    get version(): string;
    private _enumerationValue;
    get enumerationValue(): LexSlotTypeEnumerationValue[];
    set enumerationValue(value: LexSlotTypeEnumerationValue[]);
    get enumerationValueInput(): LexSlotTypeEnumerationValue[];
    private _timeouts?;
    get timeouts(): LexSlotTypeTimeouts;
    set timeouts(value: LexSlotTypeTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): LexSlotTypeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
