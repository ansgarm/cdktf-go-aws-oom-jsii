import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2SpotPriceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#availability_zone DataAwsEc2SpotPrice#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#instance_type DataAwsEc2SpotPrice#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#filter DataAwsEc2SpotPrice#filter}
     */
    readonly filter?: DataAwsEc2SpotPriceFilter[];
}
export interface DataAwsEc2SpotPriceFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#name DataAwsEc2SpotPrice#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#values DataAwsEc2SpotPrice#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html aws_ec2_spot_price}.
 */
export declare class DataAwsEc2SpotPrice extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html aws_ec2_spot_price} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2SpotPriceConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    get id(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    get spotPrice(): string;
    get spotPriceTimestamp(): string;
    private _filter?;
    get filter(): DataAwsEc2SpotPriceFilter[];
    set filter(value: DataAwsEc2SpotPriceFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2SpotPriceFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
