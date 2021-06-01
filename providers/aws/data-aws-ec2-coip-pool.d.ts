import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2CoipPoolConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#local_gateway_route_table_id DataAwsEc2CoipPool#local_gateway_route_table_id}.
     */
    readonly localGatewayRouteTableId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#pool_id DataAwsEc2CoipPool#pool_id}.
     */
    readonly poolId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#tags DataAwsEc2CoipPool#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#filter DataAwsEc2CoipPool#filter}
     */
    readonly filter?: DataAwsEc2CoipPoolFilter[];
}
export interface DataAwsEc2CoipPoolFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#name DataAwsEc2CoipPool#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#values DataAwsEc2CoipPool#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html aws_ec2_coip_pool}.
 */
export declare class DataAwsEc2CoipPool extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html aws_ec2_coip_pool} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2CoipPoolConfig);
    get id(): string;
    private _localGatewayRouteTableId?;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    resetLocalGatewayRouteTableId(): void;
    get localGatewayRouteTableIdInput(): string | undefined;
    get poolCidrs(): string[];
    private _poolId?;
    get poolId(): string;
    set poolId(value: string);
    resetPoolId(): void;
    get poolIdInput(): string | undefined;
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
    private _filter?;
    get filter(): DataAwsEc2CoipPoolFilter[];
    set filter(value: DataAwsEc2CoipPoolFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2CoipPoolFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
