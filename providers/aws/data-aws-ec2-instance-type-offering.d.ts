import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2InstanceTypeOfferingConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#location_type DataAwsEc2InstanceTypeOffering#location_type}.
     */
    readonly locationType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}.
     */
    readonly preferredInstanceTypes?: string[];
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#filter DataAwsEc2InstanceTypeOffering#filter}
     */
    readonly filter?: DataAwsEc2InstanceTypeOfferingFilter[];
}
export interface DataAwsEc2InstanceTypeOfferingFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#name DataAwsEc2InstanceTypeOffering#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#values DataAwsEc2InstanceTypeOffering#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html aws_ec2_instance_type_offering}.
 */
export declare class DataAwsEc2InstanceTypeOffering extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html aws_ec2_instance_type_offering} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2InstanceTypeOfferingConfig);
    get id(): string;
    get instanceType(): string;
    private _locationType?;
    get locationType(): string;
    set locationType(value: string);
    resetLocationType(): void;
    get locationTypeInput(): string | undefined;
    private _preferredInstanceTypes?;
    get preferredInstanceTypes(): string[];
    set preferredInstanceTypes(value: string[]);
    resetPreferredInstanceTypes(): void;
    get preferredInstanceTypesInput(): string[] | undefined;
    private _filter?;
    get filter(): DataAwsEc2InstanceTypeOfferingFilter[];
    set filter(value: DataAwsEc2InstanceTypeOfferingFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2InstanceTypeOfferingFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
