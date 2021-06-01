import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchQueryDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html#log_group_names CloudwatchQueryDefinition#log_group_names}.
     */
    readonly logGroupNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html#name CloudwatchQueryDefinition#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html#query_string CloudwatchQueryDefinition#query_string}.
     */
    readonly queryString: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html aws_cloudwatch_query_definition}.
 */
export declare class CloudwatchQueryDefinition extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html aws_cloudwatch_query_definition} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchQueryDefinitionConfig);
    get id(): string;
    private _logGroupNames?;
    get logGroupNames(): string[];
    set logGroupNames(value: string[]);
    resetLogGroupNames(): void;
    get logGroupNamesInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get queryDefinitionId(): string;
    private _queryString;
    get queryString(): string;
    set queryString(value: string);
    get queryStringInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
