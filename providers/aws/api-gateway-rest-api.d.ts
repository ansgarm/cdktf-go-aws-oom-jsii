import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#api_key_source ApiGatewayRestApi#api_key_source}.
     */
    readonly apiKeySource?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#binary_media_types ApiGatewayRestApi#binary_media_types}.
     */
    readonly binaryMediaTypes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#body ApiGatewayRestApi#body}.
     */
    readonly body?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#description ApiGatewayRestApi#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}.
     */
    readonly disableExecuteApiEndpoint?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}.
     */
    readonly minimumCompressionSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#name ApiGatewayRestApi#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#parameters ApiGatewayRestApi#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#policy ApiGatewayRestApi#policy}.
     */
    readonly policy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#tags ApiGatewayRestApi#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#tags_all ApiGatewayRestApi#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * endpoint_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}
     */
    readonly endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration[];
}
export interface ApiGatewayRestApiEndpointConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#types ApiGatewayRestApi#types}.
     */
    readonly types: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}.
     */
    readonly vpcEndpointIds?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html aws_api_gateway_rest_api}.
 */
export declare class ApiGatewayRestApi extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html aws_api_gateway_rest_api} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayRestApiConfig);
    private _apiKeySource?;
    get apiKeySource(): string;
    set apiKeySource(value: string);
    resetApiKeySource(): void;
    get apiKeySourceInput(): string | undefined;
    get arn(): string;
    private _binaryMediaTypes?;
    get binaryMediaTypes(): string[];
    set binaryMediaTypes(value: string[]);
    resetBinaryMediaTypes(): void;
    get binaryMediaTypesInput(): string[] | undefined;
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string | undefined;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _disableExecuteApiEndpoint?;
    get disableExecuteApiEndpoint(): boolean;
    set disableExecuteApiEndpoint(value: boolean);
    resetDisableExecuteApiEndpoint(): void;
    get disableExecuteApiEndpointInput(): boolean | undefined;
    get executionArn(): string;
    get id(): string;
    private _minimumCompressionSize?;
    get minimumCompressionSize(): number;
    set minimumCompressionSize(value: number);
    resetMinimumCompressionSize(): void;
    get minimumCompressionSizeInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    get rootResourceId(): string;
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
    private _endpointConfiguration?;
    get endpointConfiguration(): ApiGatewayRestApiEndpointConfiguration[];
    set endpointConfiguration(value: ApiGatewayRestApiEndpointConfiguration[]);
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): ApiGatewayRestApiEndpointConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
