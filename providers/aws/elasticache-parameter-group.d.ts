import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#description ElasticacheParameterGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#family ElasticacheParameterGroup#family}.
     */
    readonly family: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#name ElasticacheParameterGroup#name}.
     */
    readonly name: string;
    /**
     * parameter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#parameter ElasticacheParameterGroup#parameter}
     */
    readonly parameter?: ElasticacheParameterGroupParameter[];
}
export interface ElasticacheParameterGroupParameter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#name ElasticacheParameterGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#value ElasticacheParameterGroup#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html aws_elasticache_parameter_group}.
 */
export declare class ElasticacheParameterGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html aws_elasticache_parameter_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticacheParameterGroupConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _family;
    get family(): string;
    set family(value: string);
    get familyInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameter?;
    get parameter(): ElasticacheParameterGroupParameter[];
    set parameter(value: ElasticacheParameterGroupParameter[]);
    resetParameter(): void;
    get parameterInput(): ElasticacheParameterGroupParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
