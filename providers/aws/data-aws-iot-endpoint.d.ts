import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIotEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html#endpoint_type DataAwsIotEndpoint#endpoint_type}.
     */
    readonly endpointType?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint}.
 */
export declare class DataAwsIotEndpoint extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsIotEndpointConfig);
    get endpointAddress(): string;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    resetEndpointType(): void;
    get endpointTypeInput(): string | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
