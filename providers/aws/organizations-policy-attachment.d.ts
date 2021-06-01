import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationsPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html#policy_id OrganizationsPolicyAttachment#policy_id}.
     */
    readonly policyId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html#target_id OrganizationsPolicyAttachment#target_id}.
     */
    readonly targetId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html aws_organizations_policy_attachment}.
 */
export declare class OrganizationsPolicyAttachment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html aws_organizations_policy_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: OrganizationsPolicyAttachmentConfig);
    get id(): string;
    private _policyId;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string;
    private _targetId;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
