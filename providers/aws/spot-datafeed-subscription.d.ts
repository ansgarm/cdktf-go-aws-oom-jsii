import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SpotDatafeedSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html#bucket SpotDatafeedSubscription#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html#prefix SpotDatafeedSubscription#prefix}.
     */
    readonly prefix?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html aws_spot_datafeed_subscription}.
 */
export declare class SpotDatafeedSubscription extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html aws_spot_datafeed_subscription} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SpotDatafeedSubscriptionConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
