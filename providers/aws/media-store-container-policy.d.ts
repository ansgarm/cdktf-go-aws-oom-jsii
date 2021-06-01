import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediaStoreContainerPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_store_container_policy.html#container_name MediaStoreContainerPolicy#container_name}.
     */
    readonly containerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_store_container_policy.html#policy MediaStoreContainerPolicy#policy}.
     */
    readonly policy: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_store_container_policy.html aws_media_store_container_policy}.
 */
export declare class MediaStoreContainerPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/media_store_container_policy.html aws_media_store_container_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MediaStoreContainerPolicyConfig);
    private _containerName;
    get containerName(): string;
    set containerName(value: string);
    get containerNameInput(): string;
    get id(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
