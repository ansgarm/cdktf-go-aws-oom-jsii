import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html#api_id DataAwsApigatewayv2Api#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html#tags DataAwsApigatewayv2Api#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsApigatewayv2ApiCorsConfiguration extends cdktf.ComplexComputedList {
    get allowCredentials(): boolean;
    get allowHeaders(): string[];
    get allowMethods(): string[];
    get allowOrigins(): string[];
    get exposeHeaders(): string[];
    get maxAge(): number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html aws_apigatewayv2_api}.
 */
export declare class DataAwsApigatewayv2Api extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html aws_apigatewayv2_api} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsApigatewayv2ApiConfig);
    get apiEndpoint(): string;
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    get apiKeySelectionExpression(): string;
    get arn(): string;
    corsConfiguration(index: string): DataAwsApigatewayv2ApiCorsConfiguration;
    get description(): string;
    get disableExecuteApiEndpoint(): boolean;
    get executionArn(): string;
    get id(): string;
    get name(): string;
    get protocolType(): string;
    get routeSelectionExpression(): string;
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
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
