import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAlbConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb.html#name DataAwsAlb#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb.html#tags DataAwsAlb#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsAlbAccessLogs extends cdktf.ComplexComputedList {
    get bucket(): string;
    get enabled(): boolean;
    get prefix(): string;
}
export declare class DataAwsAlbSubnetMapping extends cdktf.ComplexComputedList {
    get allocationId(): string;
    get ipv6Address(): string;
    get outpostId(): string;
    get privateIpv4Address(): string;
    get subnetId(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb}.
 */
export declare class DataAwsAlb extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsAlbConfig);
    accessLogs(index: string): DataAwsAlbAccessLogs;
    get arn(): string;
    get arnSuffix(): string;
    get customerOwnedIpv4Pool(): string;
    get dnsName(): string;
    get dropInvalidHeaderFields(): boolean;
    get enableDeletionProtection(): boolean;
    get enableHttp2(): boolean;
    get id(): string;
    get idleTimeout(): number;
    get internal(): boolean;
    get ipAddressType(): string;
    get loadBalancerType(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get securityGroups(): string[];
    subnetMapping(index: string): DataAwsAlbSubnetMapping;
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
    get vpcId(): string;
    get zoneId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
