import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#name DataAwsSecurityGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#tags DataAwsSecurityGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#vpc_id DataAwsSecurityGroup#vpc_id}.
     */
    readonly vpcId?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#filter DataAwsSecurityGroup#filter}
     */
    readonly filter?: DataAwsSecurityGroupFilter[];
}
export interface DataAwsSecurityGroupFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#name DataAwsSecurityGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#values DataAwsSecurityGroup#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/security_group.html aws_security_group}.
 */
export declare class DataAwsSecurityGroup extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/security_group.html aws_security_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsSecurityGroupConfig);
    get arn(): string;
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter?;
    get filter(): DataAwsSecurityGroupFilter[];
    set filter(value: DataAwsSecurityGroupFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsSecurityGroupFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
