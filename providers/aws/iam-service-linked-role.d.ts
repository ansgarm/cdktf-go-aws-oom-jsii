import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamServiceLinkedRoleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html#aws_service_name IamServiceLinkedRole#aws_service_name}.
     */
    readonly awsServiceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html#custom_suffix IamServiceLinkedRole#custom_suffix}.
     */
    readonly customSuffix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html#description IamServiceLinkedRole#description}.
     */
    readonly description?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html aws_iam_service_linked_role}.
 */
export declare class IamServiceLinkedRole extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html aws_iam_service_linked_role} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamServiceLinkedRoleConfig);
    get arn(): string;
    private _awsServiceName;
    get awsServiceName(): string;
    set awsServiceName(value: string);
    get awsServiceNameInput(): string;
    get createDate(): string;
    private _customSuffix?;
    get customSuffix(): string;
    set customSuffix(value: string);
    resetCustomSuffix(): void;
    get customSuffixInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get name(): string;
    get path(): string;
    get uniqueId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
