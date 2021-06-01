import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecurityGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#tags DataAwsSecurityGroups#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#filter DataAwsSecurityGroups#filter}
     */
    readonly filter?: DataAwsSecurityGroupsFilter[];
}
export interface DataAwsSecurityGroupsFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#name DataAwsSecurityGroups#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#values DataAwsSecurityGroups#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html aws_security_groups}.
 */
export declare class DataAwsSecurityGroups extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html aws_security_groups} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsSecurityGroupsConfig);
    get arns(): string[];
    get id(): string;
    get ids(): string[];
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
    get vpcIds(): string[];
    private _filter?;
    get filter(): DataAwsSecurityGroupsFilter[];
    set filter(value: DataAwsSecurityGroupsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsSecurityGroupsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
