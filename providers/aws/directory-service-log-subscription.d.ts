import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DirectoryServiceLogSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html#directory_id DirectoryServiceLogSubscription#directory_id}.
     */
    readonly directoryId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html#log_group_name DirectoryServiceLogSubscription#log_group_name}.
     */
    readonly logGroupName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html aws_directory_service_log_subscription}.
 */
export declare class DirectoryServiceLogSubscription extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html aws_directory_service_log_subscription} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DirectoryServiceLogSubscriptionConfig);
    private _directoryId;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string;
    get id(): string;
    private _logGroupName;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
