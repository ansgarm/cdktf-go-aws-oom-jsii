import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface XrayGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group.html#filter_expression XrayGroup#filter_expression}.
     */
    readonly filterExpression: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group.html#group_name XrayGroup#group_name}.
     */
    readonly groupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group.html#tags XrayGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group.html#tags_all XrayGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/xray_group.html aws_xray_group}.
 */
export declare class XrayGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/xray_group.html aws_xray_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: XrayGroupConfig);
    get arn(): string;
    private _filterExpression;
    get filterExpression(): string;
    set filterExpression(value: string);
    get filterExpressionInput(): string;
    private _groupName;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string;
    get id(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
