import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html#aws_account_id QuicksightGroup#aws_account_id}.
     */
    readonly awsAccountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html#description QuicksightGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html#group_name QuicksightGroup#group_name}.
     */
    readonly groupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html#namespace QuicksightGroup#namespace}.
     */
    readonly namespace?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html aws_quicksight_group}.
 */
export declare class QuicksightGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html aws_quicksight_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: QuicksightGroupConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _groupName;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string;
    get id(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
