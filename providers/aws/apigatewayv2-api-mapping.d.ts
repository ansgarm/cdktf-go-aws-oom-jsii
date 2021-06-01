import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2ApiMappingConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#api_id Apigatewayv2ApiMapping#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#api_mapping_key Apigatewayv2ApiMapping#api_mapping_key}.
     */
    readonly apiMappingKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#domain_name Apigatewayv2ApiMapping#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#stage Apigatewayv2ApiMapping#stage}.
     */
    readonly stage: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html aws_apigatewayv2_api_mapping}.
 */
export declare class Apigatewayv2ApiMapping extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html aws_apigatewayv2_api_mapping} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Apigatewayv2ApiMappingConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    private _apiMappingKey?;
    get apiMappingKey(): string;
    set apiMappingKey(value: string);
    resetApiMappingKey(): void;
    get apiMappingKeyInput(): string | undefined;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    private _stage;
    get stage(): string;
    set stage(value: string);
    get stageInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
