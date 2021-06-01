import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#amazon_side_asn DxGateway#amazon_side_asn}.
     */
    readonly amazonSideAsn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#name DxGateway#name}.
     */
    readonly name: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#timeouts DxGateway#timeouts}
     */
    readonly timeouts?: DxGatewayTimeouts;
}
export interface DxGatewayTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#create DxGateway#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#delete DxGateway#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html aws_dx_gateway}.
 */
export declare class DxGateway extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html aws_dx_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxGatewayConfig);
    private _amazonSideAsn;
    get amazonSideAsn(): string;
    set amazonSideAsn(value: string);
    get amazonSideAsnInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerAccountId(): string;
    private _timeouts?;
    get timeouts(): DxGatewayTimeouts;
    set timeouts(value: DxGatewayTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DxGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
