import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Cloud9EnvironmentEc2Config extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}.
     */
    readonly automaticStopTimeMinutes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#description Cloud9EnvironmentEc2#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#instance_type Cloud9EnvironmentEc2#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#name Cloud9EnvironmentEc2#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#owner_arn Cloud9EnvironmentEc2#owner_arn}.
     */
    readonly ownerArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#subnet_id Cloud9EnvironmentEc2#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#tags Cloud9EnvironmentEc2#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#tags_all Cloud9EnvironmentEc2#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html aws_cloud9_environment_ec2}.
 */
export declare class Cloud9EnvironmentEc2 extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html aws_cloud9_environment_ec2} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Cloud9EnvironmentEc2Config);
    get arn(): string;
    private _automaticStopTimeMinutes?;
    get automaticStopTimeMinutes(): number;
    set automaticStopTimeMinutes(value: number);
    resetAutomaticStopTimeMinutes(): void;
    get automaticStopTimeMinutesInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _instanceType;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ownerArn?;
    get ownerArn(): string;
    set ownerArn(value: string);
    resetOwnerArn(): void;
    get ownerArnInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
