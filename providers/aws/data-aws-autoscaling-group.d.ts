import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group.html#name DataAwsAutoscalingGroup#name}.
     */
    readonly name: string;
}
export declare class DataAwsAutoscalingGroupLaunchTemplate extends cdktf.ComplexComputedList {
    get id(): string;
    get name(): string;
    get version(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group.html aws_autoscaling_group}.
 */
export declare class DataAwsAutoscalingGroup extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group.html aws_autoscaling_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsAutoscalingGroupConfig);
    get arn(): string;
    get availabilityZones(): string[];
    get defaultCooldown(): number;
    get desiredCapacity(): number;
    get healthCheckGracePeriod(): number;
    get healthCheckType(): string;
    get id(): string;
    get launchConfiguration(): string;
    launchTemplate(index: string): DataAwsAutoscalingGroupLaunchTemplate;
    get loadBalancers(): string[];
    get maxSize(): number;
    get minSize(): number;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get newInstancesProtectedFromScaleIn(): boolean;
    get placementGroup(): string;
    get serviceLinkedRoleArn(): string;
    get status(): string;
    get targetGroupArns(): string[];
    get terminationPolicies(): string[];
    get vpcZoneIdentifier(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
