import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DaxParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#description DaxParameterGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#name DaxParameterGroup#name}.
     */
    readonly name: string;
    /**
     * parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#parameters DaxParameterGroup#parameters}
     */
    readonly parameters?: DaxParameterGroupParameters[];
}
export interface DaxParameterGroupParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#name DaxParameterGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#value DaxParameterGroup#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html aws_dax_parameter_group}.
 */
export declare class DaxParameterGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html aws_dax_parameter_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DaxParameterGroupConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): DaxParameterGroupParameters[];
    set parameters(value: DaxParameterGroupParameters[]);
    resetParameters(): void;
    get parametersInput(): DaxParameterGroupParameters[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
