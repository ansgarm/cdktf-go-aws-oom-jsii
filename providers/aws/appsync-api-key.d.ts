import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncApiKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html#api_id AppsyncApiKey#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html#description AppsyncApiKey#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html#expires AppsyncApiKey#expires}.
     */
    readonly expires?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html aws_appsync_api_key}.
 */
export declare class AppsyncApiKey extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html aws_appsync_api_key} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppsyncApiKeyConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _expires?;
    get expires(): string;
    set expires(value: string);
    resetExpires(): void;
    get expiresInput(): string | undefined;
    get id(): string;
    get key(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
