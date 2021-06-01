import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2InstanceTypeOfferingsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#location_type DataAwsEc2InstanceTypeOfferings#location_type}.
     */
    readonly locationType?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#filter DataAwsEc2InstanceTypeOfferings#filter}
     */
    readonly filter?: DataAwsEc2InstanceTypeOfferingsFilter[];
}
export interface DataAwsEc2InstanceTypeOfferingsFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#name DataAwsEc2InstanceTypeOfferings#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#values DataAwsEc2InstanceTypeOfferings#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html aws_ec2_instance_type_offerings}.
 */
export declare class DataAwsEc2InstanceTypeOfferings extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html aws_ec2_instance_type_offerings} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2InstanceTypeOfferingsConfig);
    get id(): string;
    get instanceTypes(): string[];
    private _locationType?;
    get locationType(): string;
    set locationType(value: string);
    resetLocationType(): void;
    get locationTypeInput(): string | undefined;
    private _filter?;
    get filter(): DataAwsEc2InstanceTypeOfferingsFilter[];
    set filter(value: DataAwsEc2InstanceTypeOfferingsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2InstanceTypeOfferingsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
