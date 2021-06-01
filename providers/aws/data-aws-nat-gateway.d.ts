import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsNatGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#state DataAwsNatGateway#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#subnet_id DataAwsNatGateway#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#tags DataAwsNatGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#vpc_id DataAwsNatGateway#vpc_id}.
     */
    readonly vpcId?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#filter DataAwsNatGateway#filter}
     */
    readonly filter?: DataAwsNatGatewayFilter[];
}
export interface DataAwsNatGatewayFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#name DataAwsNatGateway#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#values DataAwsNatGateway#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html aws_nat_gateway}.
 */
export declare class DataAwsNatGateway extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html aws_nat_gateway} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsNatGatewayConfig);
    get allocationId(): string;
    get id(): string;
    get networkInterfaceId(): string;
    get privateIp(): string;
    get publicIp(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter?;
    get filter(): DataAwsNatGatewayFilter[];
    set filter(value: DataAwsNatGatewayFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsNatGatewayFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
