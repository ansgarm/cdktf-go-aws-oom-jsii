import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigAggregateAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#account_id ConfigAggregateAuthorization#account_id}.
     */
    readonly accountId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#region ConfigAggregateAuthorization#region}.
     */
    readonly region: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#tags ConfigAggregateAuthorization#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#tags_all ConfigAggregateAuthorization#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html aws_config_aggregate_authorization}.
 */
export declare class ConfigAggregateAuthorization extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html aws_config_aggregate_authorization} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ConfigAggregateAuthorizationConfig);
    private _accountId;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get arn(): string;
    get id(): string;
    private _region;
    get region(): string;
    set region(value: string);
    get regionInput(): string;
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
