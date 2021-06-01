import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApigatewayv2ApisConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html#name DataAwsApigatewayv2Apis#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html#protocol_type DataAwsApigatewayv2Apis#protocol_type}.
     */
    readonly protocolType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html#tags DataAwsApigatewayv2Apis#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html aws_apigatewayv2_apis}.
 */
export declare class DataAwsApigatewayv2Apis extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html aws_apigatewayv2_apis} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsApigatewayv2ApisConfig);
    get id(): string;
    get ids(): string[];
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _protocolType?;
    get protocolType(): string;
    set protocolType(value: string);
    resetProtocolType(): void;
    get protocolTypeInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
