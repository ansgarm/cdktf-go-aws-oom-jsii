import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2AvailabilityZoneGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html#group_name Ec2AvailabilityZoneGroup#group_name}.
     */
    readonly groupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}.
     */
    readonly optInStatus: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html aws_ec2_availability_zone_group}.
 */
export declare class Ec2AvailabilityZoneGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html aws_ec2_availability_zone_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2AvailabilityZoneGroupConfig);
    private _groupName;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string;
    get id(): string;
    private _optInStatus;
    get optInStatus(): string;
    set optInStatus(value: string);
    get optInStatusInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
