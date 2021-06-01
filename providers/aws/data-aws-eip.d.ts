import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEipConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#public_ip DataAwsEip#public_ip}.
     */
    readonly publicIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#tags DataAwsEip#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#filter DataAwsEip#filter}
     */
    readonly filter?: DataAwsEipFilter[];
}
export interface DataAwsEipFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#name DataAwsEip#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#values DataAwsEip#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eip.html aws_eip}.
 */
export declare class DataAwsEip extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eip.html aws_eip} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEipConfig);
    get associationId(): string;
    get carrierIp(): string;
    get customerOwnedIp(): string;
    get customerOwnedIpv4Pool(): string;
    get domain(): string;
    get id(): string;
    get instanceId(): string;
    get networkInterfaceId(): string;
    get networkInterfaceOwnerId(): string;
    get privateDns(): string;
    get privateIp(): string;
    get publicDns(): string;
    private _publicIp?;
    get publicIp(): string;
    set publicIp(value: string);
    resetPublicIp(): void;
    get publicIpInput(): string | undefined;
    get publicIpv4Pool(): string;
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
    get filter(): DataAwsEipFilter[];
    set filter(value: DataAwsEipFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEipFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
