import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElbConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elb.html#name DataAwsElb#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elb.html#tags DataAwsElb#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsElbAccessLogs extends cdktf.ComplexComputedList {
    get bucket(): string;
    get bucketPrefix(): string;
    get enabled(): boolean;
    get interval(): number;
}
export declare class DataAwsElbHealthCheck extends cdktf.ComplexComputedList {
    get healthyThreshold(): number;
    get interval(): number;
    get target(): string;
    get timeout(): number;
    get unhealthyThreshold(): number;
}
export declare class DataAwsElbListener extends cdktf.ComplexComputedList {
    get instancePort(): number;
    get instanceProtocol(): string;
    get lbPort(): number;
    get lbProtocol(): string;
    get sslCertificateId(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elb.html aws_elb}.
 */
export declare class DataAwsElb extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elb.html aws_elb} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsElbConfig);
    accessLogs(index: string): DataAwsElbAccessLogs;
    get arn(): string;
    get availabilityZones(): string[];
    get connectionDraining(): boolean;
    get connectionDrainingTimeout(): number;
    get crossZoneLoadBalancing(): boolean;
    get dnsName(): string;
    healthCheck(index: string): DataAwsElbHealthCheck;
    get id(): string;
    get idleTimeout(): number;
    get instances(): string[];
    get internal(): boolean;
    listener(index: string): DataAwsElbListener;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get securityGroups(): string[];
    get sourceSecurityGroup(): string;
    get sourceSecurityGroupId(): string;
    get subnets(): string[];
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
    get zoneId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
