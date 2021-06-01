import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html#description ElasticacheSecurityGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html#name ElasticacheSecurityGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html#security_group_names ElasticacheSecurityGroup#security_group_names}.
     */
    readonly securityGroupNames: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html aws_elasticache_security_group}.
 */
export declare class ElasticacheSecurityGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html aws_elasticache_security_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticacheSecurityGroupConfig);
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
    private _securityGroupNames;
    get securityGroupNames(): string[];
    set securityGroupNames(value: string[]);
    get securityGroupNamesInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
